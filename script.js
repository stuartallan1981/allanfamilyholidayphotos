
document.addEventListener('DOMContentLoaded', () => {
    const photoGrid = document.querySelector('.photo-grid');

    const defaultPhotos = [
        { src: '[your_bucket_name.s3.your_region.amazonaws.com](https://YOUR_BUCKET_NAME.s3.YOUR_REGION.amazonaws.com/placeholder/placeholder1.jpg)', title: 'Placeholder Photo 1', location: 'Internet', description: 'This is a default photo description.' },
        { src: '[your_bucket_name.s3.your_region.amazonaws.com](https://YOUR_BUCKET_NAME.s3.YOUR_REGION.amazonaws.com/placeholder/placeholder2.jpg)', title: 'Placeholder Photo 2', location: 'Internet', description: 'Another default description for a placeholder.' },
    ];

    window.loadPhotos = function() {
        const currentPhotos = window.pagePhotos || defaultPhotos;

        if (!photoGrid) return;

        photoGrid.innerHTML = '';

        currentPhotos.forEach(photoData => {
            const photoItem = document.createElement('div');
            photoItem.classList.add('photo-item');

            const img = document.createElement('img');
            img.src = photoData.src;
            img.alt = photoData.title;

            const labelDiv = document.createElement('div');
            labelDiv.classList.add('photo-label');
            labelDiv.innerHTML = `<strong>${photoData.title}</strong><br>${photoData.location}`;

            photoItem.appendChild(img);
            photoItem.appendChild(labelDiv);
            photoGrid.appendChild(photoItem);

            photoItem.addEventListener('click', () => {
                const imageUrl = encodeURIComponent(photoData.src);
                const imageTitle = encodeURIComponent(photoData.title);
                const imageLocation = encodeURIComponent(photoData.location);
                const imageDescription = encodeURIComponent(photoData.description || ''); 
                
                window.location.href = `view-photo.html?src=${imageUrl}&title=${imageTitle}&location=${imageLocation}&description=${imageDescription}`;
            });
        });
    };

    if (window.pagePhotos && photoGrid) {
        window.loadPhotos();
    }
});
