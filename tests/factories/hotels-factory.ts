import faker from "@faker-js/faker";
import { prisma } from "@/config";
import { HotelParams } from "@/protocols";

//Sabe criar objetos - Hotel do banco
export async function createHotel() {
  return await prisma.hotel.create({
    data: {
      name: faker.name.findName(),
      image: faker.image.imageUrl(),
    }
  });
}

export async function createHotelWithRooms() {
  return prisma.hotel.create({
    data: {
      name: faker.name.firstName(),
      image: faker.image.imageUrl(),
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

export async function createRoomWithHotelId(hotelId: number) {
  return prisma.room.create({
    data: {
      name: "1020",
      capacity: 3,
      hotelId: hotelId,
    }
  });
}
