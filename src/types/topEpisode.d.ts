interface TopPodcast {
  feeds: SetStateAction<Array>;
  podcasts: {
    data: feeds[];
  };
}
