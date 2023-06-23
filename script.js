//your JS code here. If required.
	 function updateOutput() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("Hello, world!");
          }, 1000);
        });
      }
     updateOutput().then((result) => {
        setText(result);
      });
      function setText(text) {
        const element = document.getElementById('output');
          element.textContent = text;
      }

      
      