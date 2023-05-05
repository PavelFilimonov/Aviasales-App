import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import service from './../service';

export const getTickets = createAsyncThunk('aviasales/getTickets', () => service.getTickets());

const appSlice = createSlice({
  name: 'aviasales',
  initialState: {
    checkboxes: [
      {
        id: 1,
        text: 'Все',
        checked: true,
      },
      {
        id: 2,
        text: 'Без пересадок',
        checked: true,
      },
      {
        id: 3,
        text: '1 пересадка',
        checked: true,
      },
      {
        id: 4,
        text: '2 пересадки',
        checked: true,
      },
      {
        id: 5,
        text: '3 пересадки',
        checked: true,
      },
    ],
    tickets: [],
    btnFilters: [
      {
        id: 1,
        text: 'Самый дешевый',
        active: false,
      },
      {
        id: 2,
        text: 'Самый быстрый',
        active: false,
      },
      {
        id: 3,
        text: 'Оптимальный',
        active: false,
      },
    ],
    arrayCountTransfer: [0, 1, 2, 3],
    isStop: false,
    status: null,
    error: null,
    counter: 5,
  },
  reducers: {
    changeCheckboxStatus(state, action) {
      state.checkboxes.forEach((checkbox) => {
        if (checkbox.id === action.payload) {
          checkbox.checked = !checkbox.checked;
        }
      });

      if (state.checkboxes[0].checked && action.payload === 1) {
        state.checkboxes.forEach((checkbox) => (checkbox.checked = true));
      }

      if (!state.checkboxes[0].checked && action.payload === 1) {
        state.checkboxes.forEach((checkbox) => (checkbox.checked = false));
      }

      if (state.checkboxes[0].checked && action.payload !== 1) {
        state.checkboxes[0].checked = false;
      }

      if (
        state.checkboxes[1].checked &&
        state.checkboxes[2].checked &&
        state.checkboxes[3].checked &&
        state.checkboxes[4].checked
      ) {
        state.checkboxes[0].checked = true;
      }

      state.arrayCountTransfer = state.checkboxes.slice(1).map((checkbox) => {
        if (checkbox.checked) {
          return checkbox.id - 2;
        } else {
          return null;
        }
      });
    },
    sortedTickets(state, action) {
      state.btnFilters.forEach((filter) => {
        if (filter.id === action.payload) {
          filter.active = true;
        } else {
          filter.active = false;
        }

        if (filter.text === 'Самый дешевый' && filter.active) {
          state.tickets.sort((a, b) => a.ticket.price - b.ticket.price);
        }

        if (filter.text === 'Самый быстрый' && filter.active) {
          state.tickets.sort(
            (a, b) =>
              a.ticket.segments[0].duration +
              a.ticket.segments[1].duration -
              b.ticket.segments[0].duration -
              b.ticket.segments[1].duration
          );
        }

        if (filter.text === 'Оптимальный' && filter.active) {
          state.tickets.sort(
            (a, b) =>
              a.ticket.price - b.ticket.price ||
              a.ticket.segments[0].duration +
                a.ticket.segments[1].duration -
                b.ticket.segments[0].duration -
                b.ticket.segments[1].duration
          );
        }
      });
    },
    changeCounter(state) {
      state.counter += 5;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTickets.pending, (state) => {
      state.status = true;
      state.error = false;
    });
    builder.addCase(getTickets.fulfilled, (state, action) => {
      state.status = false;
      const localTickets = action.payload.tickets.map((ticket) => ({ id: v4(), ticket }));
      state.tickets = [...state.tickets, ...localTickets];

      if (!action.payload.stop) {
        state.isStop = !state.isStop;
      } else {
        state.status = false;
      }
    });
    builder.addCase(getTickets.rejected, (state) => {
      state.status = true;
      state.error = true;
      state.isStop = !state.isStop;
    });
  },
});

export const { changeCheckboxStatus, sortedTickets, changeCounter } = appSlice.actions;
export default appSlice.reducer;
