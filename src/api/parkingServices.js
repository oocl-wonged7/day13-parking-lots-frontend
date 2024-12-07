import api from "./api";

export const getAllParkingLots = async () => {
  try {
    const response = await api.get("/allParkingLots");
    return response.data;
  } catch (error) {
    console.error("Error fetching parking lots:", error);
    throw error;
  }
};

export const parkCar = async (plateNumber, strategy) => {
  try {
    const response = await api.post("/park", {
      plateNumber: plateNumber,
      strategy: strategy,
    });
    return response.data;
  } catch (error) {
    console.error("Error parking car:", error);
    throw error;
  }
};

export const fetchCar = async (plateNumber) => {
  try {
    const response = await api.post("/fetch", { plateNumber: plateNumber });
    return response.data;
  } catch (error) {
    console.error("Error fetching car:", error);
    throw error;
  }
};
