import axios from "axios";

export default {
  // Gets menu items
  getMenu: function () {
    return axios.get("/api/menu");
  },
  // Gets the menu item with the given id
  getItem: function (id) {
    return axios.get("/api/menu/" + id);
  },
  // Deletes the menu item with the given id
  deleteItem: function (id) {
    return axios.delete("/api/menu/" + id);
  },
  // Saves a menu item to the database
  saveItem: function (itemData) {
    return axios.post("/api/menu", itemData);
  },
};
