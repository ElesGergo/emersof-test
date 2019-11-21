import { InMemoryDbService } from "angular-in-memory-web-api";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1,
        type: "audio",
        url: "https://www.kozco.com/tech/LRMonoPhase4.wav",
        title: "Mr. Nice"
      },
      {
        id: 1,
        type: "audio",
        url: "https://www.kozco.com/tech/piano2.wav",
        title: "Piano"
      },
      {
        id: 12,
        type: "video",
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title: "Rabiit movie"
      },
      {
        id: 12,
        type: "video",
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title: "Not the rabbit movie"
      },
      {
        id: 13,
        type: "doc",
        url: "http://laderasur.com/content/uploads/2018/02/pdf-test.pdf",
        title: "Some Test Doc"
      },
      {
        id: 13,
        type: "doc",
        url:
          "https://docs.google.com/document/d/18jefeLPB7SbpPDGX5lZi73hOTqHWQCtZtYjEMHvAny0/edit",
        title: "Another test doc"
      },
      {
        id: 13,
        type: "doc",
        url: "http://laderasur.com/content/uploads/2018/02/pdf-test.pdf",
        title: "Bar"
      },
      {
        id: 13,
        type: "doc",
        url:
          "https://docs.google.com/document/d/18jefeLPB7SbpPDGX5lZi73hOTqHWQCtZtYjEMHvAny0/edit",
        title: "Foo"
      },
      {
        id: 14,
        type: "image",
        url: "https://picsum.photos/900",
        title: "image1"
      },
      {
        id: 14,
        type: "image",
        url: "https://picsum.photos/900",
        title: "image2"
      },
      {
        id: 14,
        type: "image",
        url: "https://picsum.photos/900",
        title: "image3"
      },
      {
        id: 14,
        type: "image",
        url: "https://picsum.photos/900",
        title: "image4"
      },
      {
        id: 14,
        type: "image",
        url: "https://picsum.photos/900",
        title: "image5"
      },
      {
        id: 14,
        type: "image",
        url: "https://picsum.photos/900",
        title: "image6"
      },
      {
        id: 14,
        type: "image",
        url: "https://picsum.photos/900",
        title: "image7"
      },
      {
        id: 14,
        type: "image",
        url: "https://picsum.photos/900",
        title: "image8"
      },
      {
        id: 14,
        type: "image",
        url: "https://picsum.photos/900",
        title: "image9"
      },
      {
        id: 14,
        type: "image",
        url: "https://picsum.photos/900",
        title: "image1"
      }
    ];
    return of({ heroes }).pipe(delay(10));
  }
}
