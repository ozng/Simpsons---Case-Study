import { FlatList, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { FAB } from "@rneui/themed";
// Redux, Actions
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCharData,
  deleteCharacter,
  changeOrderInList,
} from "../store/actions/character";
// Components
import CharList from "../components/CharList";

const ListScreen = ({ navigation }) => {
  const charData = useSelector((state) => state.characters.characters);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharData());
    setIsLoading(false);
  }, [dispatch]);

  const navigateToScreenHandler = (item, screen) => {
    navigation.navigate(screen, {
      character: item,
    });
  };

  return isLoading ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#2e86df" />
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <FlatList
        data={charData}
        renderItem={({ item, index }) => (
          <CharList
            character={item}
            index={index}
            onPress={() => navigateToScreenHandler(item, "Detail")}
            deleteItem={() => dispatch(deleteCharacter(item.id))}
            onPressUp={() => dispatch(changeOrderInList(item.id, "up"))}
            onPressDown={() => dispatch(changeOrderInList(item.id, "down"))}
          />
        )}
      />
      <View style={{ position: "absolute", bottom: 10, alignSelf: "center" }}>
        <FAB
          icon={{ name: "add", color: "white" }}
          color="#2e86df"
          onPress={() => navigateToScreenHandler(null, "Create")}
        />
      </View>
    </View>
  );
};

export default ListScreen;
