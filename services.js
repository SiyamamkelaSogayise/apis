document.addEventListener('DOMContentLoaded', function() {
    const serviceSelect = document.getElementById('service-select');
    const priceDisplay = document.getElementById('price');
    const serviceImages = document.querySelectorAll('.service-image');
  
    // Object containing pricing information and image paths for different services
    const services = {
      Knotless: {
        price: 470,
        images: ['pictures/small 4.jpeg', 'pictures/small backview.jpeg', 'pictures/small mix.jpeg']
      },
      Peekaboo: {
        price: 350,
        images: ['pictures/peekaboo small.jpeg', 'pictures/peekaboo 39.jpeg', 'pictures/blonde peekaboo.jpeg']
      },
      Curly: {
        price: 570,
        images: ['pictures/smedium boho.jpeg', 'pictures/boho client cam.jpeg', 'pictures/boho sm new.jpeg']
      },
      Boho: {
        price: 570,
        images: ['pictures/smedium boho.jpeg', 'pictures/boho client cam.jpeg', 'pictures/boho sm new.jpeg']
      }
    };
  
    // Function to update price display and images based on selected service
    function updatePriceAndImages() {
      const selectedService = serviceSelect.value;
      priceDisplay.textContent = `R${services[selectedService].price}`;
      const images = services[selectedService].images;
      serviceImages.forEach((image, index) => {
        image.src = images[index] || ''; // Use empty string if no image available
      });
    }
  
    // Event listener to detect changes in the selected service
    serviceSelect.addEventListener('change', updatePriceAndImages);
  
    // Initial update when the page loads
    updatePriceAndImages();
  });


  

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
  