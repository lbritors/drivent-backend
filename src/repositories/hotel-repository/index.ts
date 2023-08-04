import { prisma } from "@/config";
import { HotelParams } from "@/protocols";

async function findHotels() {
  return prisma.hotel.findMany();
}

async function findRoomsByHotelId(hotelId: number) {
  return prisma.hotel.findFirst({
    where: {
      id: hotelId,
    },
    include: {
      Rooms: true,
    }
  });
}

async function createHotelWithRooms(body: HotelParams) {
  console.log("cheguei até o repository?");
  return prisma.hotel.create({
    data: {
      name: body.name,
      image: body.image,
      Rooms: {
        create: [
          {
            name: "101",
            capacity: 4
          },
          {
            name: "102",
            capacity: 2
          },
          {
            name: "103",
            capacity: 3
          },
          {
            name: "104",
            capacity: 5
          },
          {
            name: "105",
            capacity: 2
          },
          {
            name: "106",
            capacity: 1
          },
          {
            name: "107",
            capacity: 3
          },
          {
            name: "108",
            capacity: 2
          },
          {
            name: "109",
            capacity: 5
          },
          {
            name: "110",
            capacity: 1
          },
          {
            name: "111",
            capacity: 3
          },
          {
            name: "112",
            capacity: 2
          },
          {
            name: "113",
            capacity: 2
          },
          {
            name: "114",
            capacity: 2
          },
          {
            name: "115",
            capacity: 3
          },
        ]
      },
    },
    include: {
      Rooms: true,
    },
  });
}

const hotelRepository = {
  findHotels,
  findRoomsByHotelId,
  createHotelWithRooms,
};

export default hotelRepository;
