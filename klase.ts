
const faker = require('faker');
import { kMaxLength } from "node:buffer";
import { Photo, Tag, User, UserStatus } from "./duomenys";
const users = [];
const photos = [];
const tags = [];

const userIdsCount = Math.floor(Math.random() * 10) + 1;
for (let userId = 1; userId <= userIdsCount; userId++) {
  users.push({
    uuid: userId,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    pseudoName: faker.internet.userName(),
    status: UserStatus.active,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    deletedAt: '',
  });

  const photoIdsCount = Math.floor(Math.random() * 5) + 1;
  for (let photoId = 1; photoId <= photoIdsCount; photoId++) {
    photos.push({
      id: photoId,
      userId: userId,
      imgUrl: faker.image.imageUrl(),
      verified: true,
      description: faker.lorem.text(),
      fireCount: faker.datatype.number(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      deletedAt: '',
    });

    const tagIdsCount = Math.floor(Math.random() * 3) + 1;
    for (let tagId = 1; tagId <= tagIdsCount; tagId++) {
      tags.push({
        id: tagId,
        photoId: photoId,
        userId: userId,
        tags: "tag",
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        deletedAt: "",
      });
    }
  }
}

const database = {
  users,
  photos,
  tags,
};

export default database;
