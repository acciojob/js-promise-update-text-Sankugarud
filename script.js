//your JS code here. If required.
	 function updateOutput() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("Hello, world!");
          }, 1000);
        });
      }

      function setText(elementId, text) {
        const element = document.getElementById(elementId);
        if (element) {
          element.textContent = text;
        }
      }

      // Call the updateOutput function and update the element text after the promise resolves
      updateOutput().then((result) => {
        setText("output", result);
      });