import { expect } from "chai";
import { render } from "reshow-unit";

import ContentBlock from "../ContentBlock";

describe("EventTimeline Test", () => {
  it("basic test", () => {
    const wrap = render(<ContentBlock />);
    expect(wrap.html()).to.have.string("div");
  });
});
