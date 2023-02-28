import { View, Text } from "react-native";
import React from "react";
import {
  DropdownContainer,
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
  const { options, value, onChange } = props;

  const selectedOption = options?.find((option) => option.value === value);

  return (
    <DropdownContainer>
      <Option>
        <OptionImage
          source={{
            uri: selectedOption?.image,
          }}
        />
        <OptionText>{selectedOption?.label}</OptionText>
        <OptionIcon name="chevron-down" />
      </Option>
      <DropdownWrapper>
        {options?.map((option) => {
          return (
            <Option key={option.value}>
              <OptionImage
                source={{
                  uri: option.image,
                }}
              />
              <OptionText>{option.label}</OptionText>
            </Option>
          );
        })}
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
