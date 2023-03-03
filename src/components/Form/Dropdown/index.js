import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import React, { useRef, useState } from "react";
import {
  DropdownContainer,
  DropdownImage,
  DropdownItem,
  DropdownItemImage,
  DropdownItemText,
  DropdownList,
  DropdownWrapper,
  NonSelectedOption,
  NonSelectedOptionText,
  NonSelectedOptionTextContainer,
  Option,
  OptionIcon,
  OptionImage,
  OptionText,
  SelectedOption,
  SelectedOptionText,
} from "./dropdown.styles";

const Dropdown = (props) => {
  let { label, data, onSelect, whatsSelected = 0 } = props;

  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const renderItem = ({ item }) => (
    <DropdownItem onPress={() => onItemPress(item)}>
      <DropdownItemImage source={{ uri: item.image }} />
      <DropdownItemText>{item.label}</DropdownItemText>
    </DropdownItem>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity onPress={() => setVisible(false)}>
          <DropdownList style={[{ top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </DropdownList>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <DropdownContainer>
      <DropdownWrapper onPress={toggleDropdown} ref={DropdownButton}>
        {renderDropdown()}
        <DropdownImage
          source={{
            uri: (selected && selected?.image) || data[whatsSelected]?.image,
          }}
        />
        <OptionText>
          {(selected && selected.label) || data[whatsSelected].label}
        </OptionText>
        <OptionIcon name={!visible ? "chevron-down" : "chevron-up"} />
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
