const data = {
    type: 'hotels',
    id: '11',
    attributes: {
            has_wifi: true,
            has_parking: false,
            has_pets: false,
            has_restaurant: true,
            has_bar: false,
            has_swimming_pool: false,
            has_air_conditioning: false,
            has_gym: false,
            name: '',
            main_image_src: 'https://placebear.com/300/300',
            meal_plan: '',
            user_id: '1',
            booking_id: '1',
            amount: '5000',
            currency: 'HUF',
            status: 'pending',
            stars: '',
            location: ''
    }
}

const attributes = [
    {key: 'Wifi', value: false},
    {key: 'Parking', value: false},
    {key: 'Pets', value: false},
    {key: 'Restaurant', value: false},
    {key: 'Bar', value: false},
    {key: 'Swimming pool', value: false},
    {key: 'Air conditioning', value: false},
    {key: 'Gym', value: false},
]

const keyMapping = {
    has_wifi: 'Wifi',
    has_parking: 'Parking',
    has_pets: 'Pets',
    has_restaurant: 'Restaurant',
    has_bar: 'Bar',
    has_swimming_pool: 'Swimming pool',
    has_air_conditioning: 'Air conditioning',
    has_gym: 'Gym'
}

convertResponse = (response) => {
    Object.keys(response.attributes).forEach((resEl) => {
        Object.keys(keyMapping).forEach((keyEl, index) => {
            if (resEl === keyEl) {
                if (keyMapping[keyEl] === attributes[index].key) {
                    attributes[index].value = response.attributes[resEl]
                }
            }
        })
    })
    console.log(attributes);
}

convertResponse(data);
