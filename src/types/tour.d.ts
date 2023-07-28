export type ReviewWithUser = {
  id: string;
  userEmail: string;
  message: string;
  user: User;
  rating: number;
};

export type ReviewProps = {
  tourId: string;
  Reviews: ReviewWithUser[];
  userSessionEmail?: string;
};
