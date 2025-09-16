import ListItem from "@/components/ListItem";
import ListItemSeparator from "@/components/ListItemSeperator";
import defaultStyles from "@/styles/defaultStyles";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function Index() {
  
  // declare datatype for each item in array
  type dataType = {
    id: string; // unique identifier
    title: string; // text displayed in flatlist
  }
  const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "Second Item"},
    {id: "3", title: "Third Item"},
    {id: "4", title: "Fourth Item"},
  ]
  
  // create a state var to keep track of selected id
  const [selectedId, setSelectedId] = useState<string>("1");

  const itemSelected = (item: dataType) => {
    console.log(item.title);
    setSelectedId(item.id);
  }
  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data = {DATA}
            keyExtractor = {(item: dataType) => item.id}
            extraData={selectedId}
            ItemSeparatorComponent={() => (
              <ListItemSeparator color="lightblue" />
            )}
            renderItem ={({item}) => (
              <ListItem 
                item={item}
                isSelected={item.id === selectedId}
                onPress={itemSelected}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
});
