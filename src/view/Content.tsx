import React from "react";
import { useRemoteValue } from "./ipc";

import { Switch, Text, Flex, Spacer, Kbd, useColorMode, color, useColorModeValue, } from "@chakra-ui/react";
import { AdvancedSettingsCard } from "./AdvancedSettings";
import { Card } from "./Components";

function SimpleEnableCard() {
  const { colorMode, toggleColorMode } = useColorMode();
  const logoColour = useColorModeValue("#00E5FF", "#FFCECE");
  const [dmEnabled, setDmEnable] = useRemoteValue(
    "doubleMovementEnabled",
    false
  );
  function toggleDmEnabled() {
    const value = !dmEnabled;
    setDmEnable(value);
/*   const renderColorScheme = () => {
    if(colorMode === "light"){
      return <Switch colorScheme="blue" isChecked={dmEnabled} as="div"></Switch>
    } else{
      return <Switch colorScheme="blue" isChecked={dmEnabled} as="div"></Switch>
    }
  } */
}

  return (
    <Card p="6">
      <Flex direction="column" onClick={toggleDmEnabled} cursor="pointer">
        <Flex>
          <Text variant="heading">cnr double movement lol</Text>
          <Spacer />
          {/* Render switch as Div so onClick doesn't get triggered twice: https://github.com/chakra-ui/chakra-ui/issues/2854 */}
          {/* {renderColorScheme()} */}
          <Switch colorScheme="blue" isChecked={dmEnabled} as="div"></Switch>
        </Flex>
        <Text pt="6" fontSize="md" variant="body">
          Or use the hotkey <Kbd>Ctrl</Kbd>+<Kbd>P</Kbd> to toggle double
          movement.
          <br />
          <br />
          You need to configure two things in Fortnite:
          <br />
          1. Disable WASD keyboard movement bindings
          <br />
          2. Lock input method as mouse
        </Text>
      </Flex>
    </Card>
  );
}

export function Content() {
  return (
    <>
      <SimpleEnableCard />
      <AdvancedSettingsCard />
    </>
  );
}
