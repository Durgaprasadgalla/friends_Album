const imageInput = document.getElementById('imageInput');
        const gallery = document.getElementById('gallery');

        // Function to display images from localStorage
        function displaySavedImages() {
            const savedImages = JSON.parse(localStorage.getItem('images')) || [];
            gallery.innerHTML = '';

            savedImages.forEach((imageSrc, index) => {
                addImageToGallery(imageSrc, index);
            });
        }

        // Add image with delete icon to gallery
        function addImageToGallery(imageSrc, index) {
            const imgElement = document.createElement('img');
            imgElement.src = imageSrc;

            const div = document.createElement('div');
            div.classList.add('gallery-item');
            div.setAttribute('data-index', index);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-icon');
            deleteButton.innerHTML = 'X';
            deleteButton.onclick = function () {
                deleteImage(index);
            };

            div.appendChild(imgElement);
            div.appendChild(deleteButton);

            gallery.appendChild(div);
        }

        // Save image data in localStorage and display it
        imageInput.addEventListener('change', function() {
            const files = imageInput.files;
            let savedImages = JSON.parse(localStorage.getItem('images')) || [];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();

                reader.onload = function(event) {
                    savedImages.push(event.target.result);
                    localStorage.setItem('images', JSON.stringify(savedImages));
                    addImageToGallery(event.target.result, savedImages.length - 1);
                };

                reader.readAsDataURL(file);
            }
        });

        // Delete image from gallery and localStorage
        function deleteImage(index) {
            let savedImages = JSON.parse(localStorage.getItem('images')) || [];

            // Remove image from the saved array
            savedImages.splice(index, 1);
            localStorage.setItem('images', JSON.stringify(savedImages));

            // Re-render gallery to reflect changes
            displaySavedImages();
        }

        // On page load, display the saved images
        window.onload = displaySavedImages;


var isplaying = false;
function playaudio(){
    var audio = document.getElementById("songbtn");
    if (isplaying){
        audio.pause();
    }else{
        audio.play()
    }
    isplaying =! isplaying;
}
