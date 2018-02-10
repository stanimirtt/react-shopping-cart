import expect from 'expect';

class TestHelper {
  static expectElement(element, expectedClass) {
    expect(element.length).toBe(1);
    expect(element.hasClass(expectedClass)).toEqual(true);
  }

  static expectAnchor(element, expectedClass, expectedText) {
    expect(element.length).toBe(1);
    expect(element.props().href).toEqual('#');
    expect(element.hasClass(expectedClass)).toEqual(true);
    expect(element.text()).toEqual(expectedText);
  }

  static expectIcon(element, expectedClass) {
    expect(element.length).toBe(1);
    expect(element.hasClass(expectedClass)).toEqual(true);
  }
}

export default TestHelper;
