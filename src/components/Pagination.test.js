import React from "react";
import { mount } from "enzyme";
import Pagination from "./Pagination";

it("render correct page number", () => {
  const dom = mount(
    <Pagination
      currentPage={1}
      isLastPage={true}
      onNextPageClick={() => {}}
      onPrevPageClick={() => {}}
    />
  );
  expect(dom.find("span").text()).toBe("2");
});
