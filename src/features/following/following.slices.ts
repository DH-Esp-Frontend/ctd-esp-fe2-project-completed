import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FollowingState = {
  followingIds: number[];
};

const initialState: FollowingState = {
  followingIds: []
};

const followingSlice = createSlice({
  name: 'following',
  initialState,
  reducers: {
    addCharacterToFollowingList: (state, action: PayloadAction<number>) => {
      state.followingIds = [action.payload, ...state.followingIds];
    },
    removeCharacterToFollowingList: (state, action: PayloadAction<number>) => {
      state.followingIds = state.followingIds.filter((id) => id !== action.payload);
    }
  }
});
export const { addCharacterToFollowingList, removeCharacterToFollowingList } =
  followingSlice.actions;

export default followingSlice.reducer;
