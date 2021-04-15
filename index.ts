
import database from "./klase.js";
import { Photo, User } from "./duomenys.js";

class InstagramUser {
  private userId: User["uuid"];

  constructor(userId: User["uuid"]) {
    this.userId = userId;
  }

  fetchTags(photoId: Photo["userId"]) {
    const tags = database.tags.filter((tag) => tag.userId === photoId);
    return tags;
  }

  fetchPhotos(userId: User["uuid"]) {
    const photos = database.photos.filter((photo) => photo.userId === userId);
    const photosWithTags = photos.map((photo) => ({
      ...photo,
      tags: this.fetchTags(photo.id),
    }));
    return photosWithTags;
  }

  fetchUserInfo() {
    const user = database.users.find((user) => user.uuid === this.userId);
    const userWithPhotos = {
      ...user,
      photos: this.fetchPhotos(this.userId),
    };
    return userWithPhotos;
  }
}

const myUser = new InstagramUser(1);

console.log(myUser.fetchUserInfo());