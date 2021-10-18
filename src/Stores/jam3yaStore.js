import axios from "axios";
import { makeAutoObservable } from "mobx";

import api from "./api";

class Jam3yaStore {
  jam3yat = [];

  constructor() {
    makeAutoObservable(this, {});
  }

  // createJam3ya = async (jam3ya) => {
  //   try {
  //     const res = await api.post("/jam3ya", jam3ya);
  //     this.jam3yat.push(res.data);
  //   } catch (error) {
  //     console.log("jam3yaStore -> createJam3ya -> error", error);
  //   }
  // };

  // fetchJam3ya = async () => {
  //   try {
  //     const response = await api.get("/jam3ya");
  //     console.log(response.data);

  //     this.jam3yat = response.data;
  //   } catch (error) {
  //     console.error("jam3yaStore -> fetchJam3ya -> error", error);
  //   }
  // };

  fetchJam3ya = async () => {
    try {
      const res = await axios.get(
        "https://coded-miniproject-jam3ya-be.herokuapp.com/jam3ya"
      );
      this.jam3yat = res.data; // whenever i refer to anything concerning the class, i need to use this.
      // aslong as i'm in the curly brackets of class, if i leave the curley bracket i need to call roomStore
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
}
const jam3yaStore = new Jam3yaStore();
// jam3yaStore.fetchJam3ya();
export default jam3yaStore;
