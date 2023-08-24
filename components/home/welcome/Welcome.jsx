//React
import { useState } from "react";

//React Natived
import { Image, Text, TextInput, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

//Routing
import { useRouter } from "expo-router";

//Custom Utilities
import { SIZES, icons } from "../../../constants";

//Styles
import styles from "./welcome.style";

const jobTypes = ["Full-time", "Part-time", "Contracted", "Remote", "Night-Shift"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello User</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value=""
            placeholder="What are you looking for"
            onChange={() => {}}
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        ></FlatList>
      </View>
    </View>
  );
};

export default Welcome;
