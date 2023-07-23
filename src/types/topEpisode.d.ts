interface TopPodcast {
  feeds: SetStateAction<any[]>;
  podcasts: {
    data: feeds[];
  };
}

interface Categories {
  status: ApiResponse.Status;
  feeds: PIApiCategory[];
  count: number;
  description: string;
}

interface ImageList {
  image: string;
}
