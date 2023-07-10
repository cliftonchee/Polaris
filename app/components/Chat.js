import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { TouchableOpacity, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Auth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Colours from "./Colours";
import useStore from "../../store/store";
import { KeyboardAvoidingView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Chat({ info }) {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  const userCurrent = useStore((state) => state.user);
  const userID = userCurrent.uid;
  const height = useHeaderHeight();
  const insets = useSafeAreaInsets();

  console.log(userID);

  const onSignOut = () => {
    signOut(Auth).catch((error) => console.log("Error logging out: ", error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={onSignOut}
        >
          <AntDesign
            name="logout"
            size={24}
            color={Colours.gray}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useLayoutEffect(() => {
    const collectionRef = collection(db, `chats/${info.uid}/messages`);
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("querySnapshot unsusbscribe");
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const { _id, createdAt, text } = messages[0];
    const user = { _id: userID };

    addDoc(collection(db, `chats/${info.uid}/messages`), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={height}
      behavior="padding"
      style={{ flex: 0.8 }}
      enabled
    >
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={false}
        showUserAvatar={false}
        onSend={(messages) => onSend(messages)}
        messagesContainerStyle={{
          backgroundColor: "rgba(180, 180, 180, 0.1)",
          width: 355,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        textInputStyle={{
          backgroundColor: Colours.white,
        }}
        user={{
          _id: userID,
          avatar: "https://i.pravatar.cc/300",
        }}
        bottomOffset={insets.bottom}
        wrapInSafeArea={false}
      />
    </KeyboardAvoidingView>
  );
}
