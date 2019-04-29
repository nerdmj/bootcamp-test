import React from 'react';
import { shallow } from 'enzyme';
import FirstComponent from './FirstComponent';

const wrapper = shallow(<FirstComponent />);
let container, containerProp;

describe("FirstComponent - No props", () => {
  it("should have state set properly", () => {
     expect(wrapper.state().buttonEnable).toEqual(true);
  });

 describe("render <div>", () => {
    beforeEach(() => {
       container = wrapper.find("div");
       containerProp = container.props();
    });
    
    it("should have a <div>", () => {
      expect(container).toHaveLength(1);
    });

    it("should have a <div> with properly className prop", () => {
      expect(containerProp.className).toEqual("container");
    });
 });
  
 describe("render <h2>", () => {
    beforeEach(() => {
      container = wrapper.find("h2");
    });

    it("should have a <h2>", () => {
      expect(container).toHaveLength(1);
    });

    it("should have a <h2> with the properly text", () => {
      expect(container.text()).toEqual("Hello World");
    });
 });

 describe("render <button>", () => {
    beforeEach(() => {
      container = wrapper.find("button");
      containerProp = container.props();
    });

    it("should have a <button>", () => {
      expect(container).toHaveLength(1);
    });

    it("should have a <button> with the properly text", () => {
      expect(container.text()).toEqual("click me");
    });

    it("should have a <button> without disabled prop", () => {
      expect(containerProp.disabled).toEqual(undefined);
    });

    it("should change state to false onClick <button>", () => {
      container.simulate('click');
      expect(wrapper.state().buttonEnable).toEqual(false);
    });
 });
});

describe("FirstComponent - props", () => {
  const wrapper = shallow(<FirstComponent title="Bye Bye" />);

  it("should have a <h2> with the properly text", () => {
    container = wrapper.find("h2");
    expect(container.text()).toEqual("Bye Bye");
  });
});