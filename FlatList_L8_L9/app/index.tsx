import ListItemSeparator from "@/components/ListItemSeperator";
import colors from "@/styles/colors";
import defaultStyles from "@/styles/defaultStyles";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
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
              <TouchableOpacity onPress={() => itemSelected(item)}>
                <View style={[styles.flatListRow, {
                  backgroundColor: item.id === selectedId ? colors.primary : colors.secondary
                }]}>
                  <Text style={[{
                    color: item.id === selectedId ? colors.text.light : colors.text.dark
                  }]}>{item.title}</Text>
                </View>
              </TouchableOpacity>
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
  flatListRow: {
    backgroundColor: "pink",
    margin: 5,
    padding: 5,
    width: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
