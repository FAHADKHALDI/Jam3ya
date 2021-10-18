import { makeAutoObservable } from "mobx";
import api from "./api";

class Jam3yaStore {
  jam3yat = [];

  constructor() {
    makeAutoObservable(this, {});
  }

  createJam3ya = async (jam3ya) => {
    try {
      const res = await api.post("/jam3ya", jam3ya);
      this.jam3yat.push(res.data);
    } catch (error) {
      console.log("jam3yaStore -> createJam3ya -> error", error);
    }
  };

  fetchJam3ya = async () => {
    try {
      const response = await api.get("/jam3ya");
      this.jam3yat = response.data;
    } catch (error) {
      console.error("jam3yaStore -> fetchJam3ya -> error", error);
    }
  };
}
const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3ya();
export default jam3yaStore;
