import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount
} from "../../actions/filters";
import {
  SET_TEXT_FILTER,
  SET_START_DATE,
  SET_END_DATE,
  SORT_BY_DATE,
  SORT_BY_AMOUNT
} from "../../types";
import moment from "moment";

test("should setup text filter", () => {
  const text = "rent";
  const action = setTextFilter(text);
  expect(action).toEqual({ type: SET_TEXT_FILTER, text });
});

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({ type: SET_START_DATE, startDate: moment(0) });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({ type: SET_END_DATE, endDate: moment(0) });
});

test("should generate action object for sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({ type: SORT_BY_DATE });
});

test("should generate action object for sort by Amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: SORT_BY_AMOUNT });
});
