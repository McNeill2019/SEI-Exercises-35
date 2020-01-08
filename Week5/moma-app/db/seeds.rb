
Artist.destroy_all

puts "Creating artists..."

Artist.create name: 'Lee Krasner', nationality: 'USA', dob: '1908/10/127', period: '20th Century', image: 'https://i.pinimg.com/736x/05/62/14/0562148ce05f206e7ad773dc65d565bc--lee-krasner-abstract-expressionism.jpg', roundness: 5, bio: 'Abstract Expressionist'

Artist.create name: 'Frantisek Kupka', nationality: 'Czech', dob: '1871/09/23', period: '20th Century', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Frantisek_Kupka_1928.jpg', roundness: 6, bio: 'Vorticist/Abstract'

Artist.create name: 'Max Ernst', nationality: 'German', dob: '1891/04/02', period: '20th Century', image: 'http://www.max-ernst.com/images/max-ernst-photo.jpg', roundness: 5, bio: 'Abstract Expressionist'

puts "Created #{ Artist.all.length } artists:"
puts Artist.pluck(:name).join(', ')
