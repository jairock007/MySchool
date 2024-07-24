import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSchoolData = createAsyncThunk(
  'school/fetchSchoolData',
  async () => {
    // In a real application, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'Springdale Public School',
          established: 1985,
          principalMessage: 'Welcome to Springdale Public School, where we nurture young minds for a brighter future.',
          facultyMembers: [
            { id: 1, name: 'John Doe', position: 'Principal' },
            { id: 2, name: 'Jane Smith', position: 'Vice Principal' },
            // ... more faculty members
          ],
          events: [
            { id: 1, name: 'Annual Sports Day', date: '2024-05-15' },
            { id: 2, name: 'Science Exhibition', date: '2024-06-10' },
            // ... more events
          ],
        });
      }, 1000);
    });
  }
);

const schoolSlice = createSlice({
  name: 'school',
  initialState: {
    schoolInfo: null,
    facultyMembers: [],
    events: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchoolData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSchoolData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.schoolInfo = {
          name: action.payload.name,
          established: action.payload.established,
          principalMessage: action.payload.principalMessage,
        };
        state.facultyMembers = action.payload.facultyMembers;
        state.events = action.payload.events;
      })
      .addCase(fetchSchoolData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default schoolSlice.reducer;