interface TopPodcast {
  feeds: SetStateAction<Array>;
  podcasts: {
    data: feeds[];
  };
}

interface Categories {
  status: ApiResponse.Status;
  feeds: Array<PIApiCategory>;
  count: number;
  description: string;
}

interface ImageList {
  image: string;
}
