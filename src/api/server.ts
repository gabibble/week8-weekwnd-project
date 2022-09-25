//insomnia to get urls

//token from header
let token = `34d8997752f1be079a1269c267c41983a488df57177279da`;

let my_headers = {
  "Content-Type": "application/json",
  "x-access-token": `Bearer ${token}`,
};

export const serverCalls = {
  //GET ALL
  get: async () => {
    const response = await fetch(
      `https://trip-api-app.herokuapp.com/api/get_trips`,
      {
        method: "GET",
        headers: my_headers,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  },


  //CREATE
  create: async (data: any) => {
    const response = await fetch(
      `https://trip-api-app.herokuapp.com/api/create_trip`,
      {
        method: "POST",
        headers: my_headers,
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to Create new data on server");
    }
    return await response.json();
  },


  //UPDATE
  update: async (id: string, data: any = {}) => {
    const response = await fetch(
      `https://trip-api-app.herokuapp.com/api/update_trip/${id}`,
      {
        method: "POST",
        headers: my_headers,
        body: JSON.stringify(data),
      }
    );
  },


  //DELETE
  delete: async (id: string) => {
    const response = await fetch(
      `https://trip-api-app.herokuapp.com/api/del_trip/${id}`,
      {
        method: "DELETE",
        headers: my_headers,
      }
    );
  },
};
