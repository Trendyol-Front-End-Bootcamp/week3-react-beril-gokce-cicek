import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../../components/Header';

const renderer = new ShallowRenderer();
renderer.render(<Header />);
const headerRender = renderer.getRenderOutput();

describe("Header Test", () => {
  it("should render the header", () => {
    expect(headerRender.props.className).toEqual("nav-bar");
  });
});

