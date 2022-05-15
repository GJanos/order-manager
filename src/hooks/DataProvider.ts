import React, { useState, useEffect } from 'react';
//import axios from "axios";
import { APIMOCK, SelectableOrderPoint} from '../types/APIRequests';


export default function usePackageAddress() {
  const [addresses, setAddresses] = useState<SelectableOrderPoint[]>([]);
  const [error, setError] = useState<string>();
  
  const URL = "https://cdn.fuvar.hu/dev/points.json";

  /* in case of API was working this would be the appropriate code ..........
  useEffect(() => {
    axios
      .get<APIResponse[]>(URL,{headers: {"Access-Control-Allow-Origin": "*"}})
      .then((res) => {
        setAddresses(res.data);
      })
      .catch(() => {
        setError("Failed to get package addresses!");
      });
  }, [])
  */

  //useEffect hook getting data from API
  useEffect(() => {
    let newAddresses: SelectableOrderPoint[] = [];
    APIMOCK.forEach((address, index) => {

    newAddresses.push({
        value: index,
        label: address.title.replace('sz','. számú').replace('automata', 'posta') + ' - ' + address.city + ' ' + address.address + '.'});
    })
    setAddresses(newAddresses);
  },[])

  return {addresses, error};
}