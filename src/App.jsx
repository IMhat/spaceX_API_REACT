import { useState, useEffect } from 'react'
import { Heading } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text} from '@chakra-ui/react';
import { Spacer, Tag} from '@chakra-ui/react';

import { HiCalendar } from "react-icons/hi";

// import logo from './logo.svg'
import './App.css'
import logo from './assets/logo.png'

import * as API from "./services/launches"; 

function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(()=>{
    API.getAllLaunches().then(data => setLaunches(data));
  
  }, []);

  return (
    <>
      <img m={4} src={logo} width={300} />
      <Heading as="h1" size="lg" m={4}>
         Space x 
      </Heading>

        <section>
          {launches.map((launch) =>(
            <Box key={launch.flight_number} bg="gray.100" p={4} m={4} borderRadius="lg">
              <Box display="flex">
                <Text fontSize="2x1">
                    Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                </Text>
                <Spacer/>
                <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                   {launch.launch_success ? "Success" : "Failure"}

                </Tag>
              </Box>
              
              <Flex align="center">
                 <HiCalendar/>
                 <Text fontSize="sm" ml={1}>
                   {launch.launch_date_local.split("T")[0]}
                 </Text>
              </Flex>
            </Box>
          ))}
        </section>


    
    </>

     
  )

}

export default App
