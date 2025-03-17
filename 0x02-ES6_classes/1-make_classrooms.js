import ClassRoom from './0-classroom';

export default function initalizeRooms() {
  // Initalize an empty array to collect ClassRoom Objects here
  const classRoomObjects = [];

  // Create 3 ClassRoom Objects 
  const object1 = new ClassRoom(19);
  const object2 = new ClassRoom(20);
  const object3 = new ClassRoom(34);

  // collecting all objects into an array
  classRoomObjects.push(...[object1, object2, object3]);

  return classRoomObjects;
};


