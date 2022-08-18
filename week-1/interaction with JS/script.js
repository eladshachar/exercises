const cat = {
    makeNoise: function () {
      alert(this.noise);
    },
    noise: "Meow!"
  };
  
  const dog = {
    makeNoise: cat.makeNoise,
    noise: "Woof!"
  };
  
  cat.makeNoise();
  dog.makeNoise();