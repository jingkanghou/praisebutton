describe("Praise Button Test:", function() {
  var btn;
  var praiseCount;

  beforeAll(function() {
    btn = new Thumb(document.body);
  });


  it("button is defined", function() {
    expect(btn).toBeDefined();
  });

  it("initail praise count is 0", function() {
    expect(btn.praiseCount).toEqual(0);
  });
  
  it("increase praise, count is 1", function() {
    btn.incPraise()
    expect(btn.praiseCount).toEqual(1);
  });
  
  it("increase praise, count is 2", function() {
    btn.incPraise()
    expect(btn.praiseCount).toEqual(2);
  });
  it("initail width of praise button is 100", function() {
    expect(btn.buttonWidth).toEqual(100);
  });

  
  it("Set width of praise button is 50, and less than 100", function() {
    btn.buttonWidth = 50;
    expect(btn.buttonWidth).toEqual(50);
    expect(btn.buttonWidth).toBeLessThan(100);
  });

});