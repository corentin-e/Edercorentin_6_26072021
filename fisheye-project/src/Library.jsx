 /* let { id } = useParams();
    const [activeFilter, setActiveFilter] = useState('likes')

    console.log(data)
    const photographers = data.photographers.find(user => user.id == id)
    const photos = data.media.filter(photo => photo.photographerId == id)

    const photosSorted = photos.sort((a, b) => {
        if(activeFilter === 'likes') {
            return b.likes - a.likes
        }
    })

    console.log(photos)
    console.log(photosSorted) */

    /* return (
        { {id}
            <span>active filter: {activeFilter}</span>
            <button onClick={() => setActiveFilter('likes')}>likes</button>
            <button onClick={() => setActiveFilter('titre')}>Titre</button>



            {photosSorted.map((photo) => (
                <span>{photo.likes}</span>
                ))
            } 
    ) 
    
    {data.photographers.filter(user => user.id == id).map(photographer => (*/






        

/* const setPhotoView = useState({value: 0})
    
    const changePhotoView = (event) => {
        setPhotoView({value: event.target ? event.target.value : event});
    }

    console.log(setPhotoView); */


{/* <div className="carousel__text-test">
            <input
                type="number"
                value={setPhotoView}
                onChange={changePhotoView}
            />
            <Carousel
                value={setPhotoView}
                onChange={changePhotoView}
                slides={photosSorted.map(media => (
                    <div>
                        <div className="carousel__image-cadre-album-style">
                            {("video" in media)
                                ? <video   autoplay controls className="page__image-album-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.video}`} />
                                : <img className="page__image-album-style" type="jpg" src={`${process.env.PUBLIC_URL}/asset/photos/Album/${media.image}`} />
                            }
                        </div>
                        <div className="page__image-details-title-style">{media.title}</div>
                    </div>
                ))
                }
                plugins={[
                    'arrows',
                    'clickToChange'
                ]}
            />
            </div> */}