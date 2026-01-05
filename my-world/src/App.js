import React from 'react';
import uttran from './photo/uttranchal.jpg';
import ganga from './photo/ganga.jpg';
import Gangotri from './photo/Gangotri.jpeg';
import Kedarnath from './photo/Kedarnath copy.jpeg';
import Badrinath from './photo/Badrinath.jpeg';
import Yamunotri from './photo/Yamunotri feature.jpg';
import skiing from './photo/skiing (1).jpg';
import para from './photo/para (1).jpg';
import rafting from './photo/rafting.jpg';
import canoeing_and_kayaking from './photo/canoeing_and_kayaking.jpg';
import CORBETT from './photo/CORBETT.jpg';
import Valley from './photo/Valley of Flowers feature.jpg';
import trekking from './photo/trekking.jpg';
import cyclig from './photo/cyclig.jpg';
import jumping from './photo/jumping.jpg';
import Ministry from './photo/Ministry.jpg';
import './App.css';



function App() {
  return (
<div className="App"> 
<div className='vib'>
<div className='fist'>
<h1>welcome to “Devbhumi” uttarakhand</h1>
      </div>
<div className='poop'>
<h1><img src={ganga} alt="img" width={50} />About</h1>
      </div>
      
<div className='oop'>
<p>Uttarakhand  also known as the “Devbhumi” or “Land of Gods,” is a state in northern India.Nestled between the Tibetan Plateau and the Indo-Gangetic Plains,<span id="dots">...</span><span id="more"> it offers a captivating blend of natural beauty and spiritual significance. Here are some key points about Uttarakhand,Uttarakhand was formed on the 9th November 2000 as the 27th State of India, when it was carved out of northern Uttar Pradesh. Located at the foothills of the Himalayan mountain ranges, it is largely a hilly State, having international boundaries with China (Tibet) in the north and Nepal in the east. On its north-west lies Himachal Pradesh, while on the south is Uttar Pradesh. It is rich in natural resources especially water and forests with many glaciers, rivers, dense forests and snow-clad mountain peaks. Char-dhams, the four most sacred and revered Hindu temples of Badrinath,Kedarnath, Gangotri and Yamunotri are nestled in the mighty mountains.</span><div className='button'>
<button onclick="myFunction()" id="myBtn">Read more</button>
        </div></p>
    <div className='img'>
<img src={uttran} alt="image" width={400} height={400} />
        </div>
      </div>
<div className='gojo'>
<h1>Tourism Place</h1>
<p>most popular</p>
</div>
<div className='mex'>
< div className='word'>
<div className=' src'>
<div className='flip'>
<div className='flip-front'>
<img src={Gangotri} alt= 'image' width={320} />
              </div>
<div className='flip-back-www'>
<h2>Gangotri</h2>
<p>Gangotri is a small town centered around the temple of Gangotri temple and is one of the holy places among the four Char Dhams. It is the highest and the most important temple of river Ganga which is worshiped as a Goddess in India.The origin of the holy river is at Gaumukh, set in the Gangotri glacier that can be accessed by a short 19 km trek from Gangotri. But according to Hindu mythology, Gangotri is the place where river Ganga descended from heaven when Lord Shiva released the mighty river from his luscious locks.</p>
              </div>
            </div>
          </div>
<div className=' src'>
<div className='flip'>
<div className='flip-front'>
<img src={Kedarnath} alt='image' width={320} />
              </div>
<div className='flip-back-www'>
<h2>Kedarnath</h2>
<p>temple of the God of the field is a Hindu temple,
                   one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range[1] near the Mandakini river, in the state of Uttarakhand, India. Due to extreme weather conditions, the temple is open to the general public only between the months of April (Akshaya Tritiya) and November (Kartik Purnima, the autumn full moon). During the winters, the vigraha (deity) of the temple is carried down to Ukhimath to be worshipped for the next six months. Kedarnath is seen as a homogeneous form of Shiva, the 'Lord of Kedarkhand', the historical name of the region.[2]</p>
    </div>
            </div>  
          </div>
        </div>
<div className='uttarakhand'>
<div className=' pik'>
<div className='front'>  
<div className='need'>
<img src={Badrinath} alt='image' width={320} />
              </div>
<div className='flip-back-www'>
<h2>Badrinath</h2>
<p>The Badrinath Temple also known as the Badrinarayan Temple, located in Uttarakhand's Badrinath town, is one of the Char Dhams (four important pilgrimages) in the state. There are four pilgrim-destinations namely Yamunotri, Gangotri, Kedarnath, and Badrinath, collectively known as Char Dham. These pilgrimage centres draw large number of pilgrims each year, thus becoming the most important hubs of religious travel in the whole of Northern India.</p>
              </div>
            </div>
          </div>
<div className=' pik'>
<div className='need'>
<img src={Yamunotri} alt='image' width={320} />
              </div>
<div className='flip-back-www'>
                <h2>Yamunotri</h2>
                <p>On the western side of Garhwal Himalayas, in the Uttarkashi district of Uttarakhand, lies the holy place of Yamunotri. About 3,293 metres above the sea level, Yamunotri stands proudly with its enormous mountain peaks, glaciers and gushing waters of Yamuna. River Yamuna, the second most sacred river of India, originates in Yamunotri, making it one of the pilgrimage sites in the Chota Char Dham Yatra in Uttarakhand.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
<div className='select'>
        <label for="cars">select district:</label><br></br>
        <select>
          <option value="0"> All </option>
          <option value="1">Chamoli</option>
          <option value="2">almora</option>
          <option value="3">bageshwar</option>
          <option value="4">champawat</option>
          <option value="5">dehradun</option>
          <option value="6">haridwar</option>
          <option value="7">Nainital</option>
          <option value="8">pauri</option>
          <option value="9">pithoragarh</option>
          <option value="10">rudraprayag</option>
          <option value="11">tehri Garhwal</option>
          <option value="12">udham singh nagar</option>
          <option value="13">Uttarkashi</option>
          <option></option>
        </select>
        <br></br>
        <input type='submit' value="submit" />
      </div>


<div className='more'>
        <h1>Explore more</h1>
      </div>
      <div className='container'>
        
<div className='nav'>
<div className='image-container'>
<img src={skiing} alt='image' height={300} />
<div className='overlay'>
<div className='text'>
                <h1>skiing</h1>
                <p>The height and spread of Uttarakhand Himalayas offer long distance skiing to professional and learning skiers. Adventure lovers around India choose Auli, Mundali, Munsyari and Dayara Bugyal as their Skiing destinations specially from November to March but these snow capped Himalayas seem to entertain tourists and skiers throughout the year. The wide-open spaces over the snow line among the glaciers in Uttarakhand Himalayas increase possibility of attracting more Skiers to these places.</p>
              </div>
            </div>
          </div>
<div className='image-container'>
<img src={para} alt='image' height={300} />
<div className='overlay'>
<div className='text'>
                <h1>paragliding</h1>
                <p>The beautiful state of Uttarakhand, often referred to as the "Land of the Gods" is a haven for thrill seeking paragliders and its immense lakes raging white water rivers, fascinating mountains peaks, amazing blooming flowers in the midst of thick lush greenery offers the paragliders an experience what no other place can.

                  Have you tried "Powered paragliding" If you haven't? Please do.....Here's why.... Powered paragliding is a parachute propelled by a motorised fan and the experience is similar to flying in the sky almost on your own like a free bird.</p>
              </div>
            </div>
          </div>

<div className='image-container'>
<img src={rafting} alt='image' height={300} />
<div className='overlay'>
<div className='text'>
                <h1>rafting</h1>
                <p>Uttarakhand is popularly known as the white water rafting spot of India. Mostly, river rafting in Uttarakhand will cost you from as low as INR 600 to as high as INR 4000 per person depending upon the location and the rapid you choose. Here’s a list of some of the best river rafting places in the unbelievable state of Uttarakhand. </p>
              </div>
            </div>
          </div>
        </div>
<div className='row'>
<div className='image-container'>
<img src={canoeing_and_kayaking} alt='image' height={300} width={300} />
<div className='overlay'>
<div className="text">
                <h1>canoeing_and_kayaking</h1>
                <p>Canoeing and kayaking are two of the most favoured water sports after rafting and can be experienced in Nainital,
                   Sattal and Bhimtal lakes.
                    Adventure tour operators generally conduct training courses on kayaking for the uninitiated before an unforgettable kayaking experience.
                    </p>
              </div>
            </div>
          </div>
<div className='image-container'>
<img src={CORBETT} alt='image' height={300} width={300} />
<div className='overlay'>
<div className='text'>
                <h1>CORBETT-JEEP-SAFARI</h1>
                <p>Famous for having the highest number of tigers among Indian national parks.
                  Covers thousands of kilometers of stunning landscape.
                  Allows overnight stays in certain areas.
                  Look-out for Royal Bengal tiger, Asiatic elephant, bear, a variety of deer, otters, other animals and over 650 species of domestic and migratory birds.
                  What to know</p>
              </div>
            </div>
          </div>
<div className='image-container'>
<img src={jumping} alt='image' height={300} />
<div className='overlay'>
<div className='text'>
                <h1>bungee_jumping</h1>
                <p>Experience the most extreme sports of New Zealand in the Adventure Capital of India: Rishikesh, Uttarakhand INDIA’S HIGHEST BUNGY (jump height: 83 mtrs).

                  INDIA’S MOST EXTREME GIANT SWING (jump height: 83 mtrs).

                  AND ASIA'S LONGEST FLYING FOX (length: 1 km; Speed: 140-160 kmph).
                </p>
              </div>
            </div>
          </div>
        </div>
 <div className='column'>
<div className='image-container'>
<img src={Valley} alt='image' height={300} />
<div className='overlay'>
<div className='text'>
                <h1>Valley of Flowers feature</h1>
                <p>With a stunning backdrop of the mighty Himalayan ranges, the Valley of Flowers National Park presents an ethereal view and an unforgettable experience for visitors. Spread over an area of 87 sq km in the Chamoli district, the Valley of Flowers National Park is a UNESCO World Heritage Site and forms one of the two core zones (the other being the Nanda Devi National Park) of the Nanda Devi Biosphere Reserve.</p>
              </div>
            </div>
          </div>
<div className='image-container'>
<img src={trekking} alt='image' height={300} />
<div className='overlay'>
<div className='text'>
                <h1>trekking</h1>
                <p>You can plan a trip to Uttarakhand all year round, the best time to visit is during May to June and September to November. During these months, the weather is usually pleasant with minimal rainfall. These factors make these months ideal for exploring the trekking sites in Uttarakhand. Some of the popular ones are the Har ki Dun Trek, Kuari Pass Trek, and Roopkund Trek. However, each season in Uttarakhand has its beauty and offers its unique experiences</p>
              </div>
            </div>
          </div>
<div className='image-container'>
<img src={cyclig} alt='image' height={300} />
<div className='overlay'>
<div className='text'>
                <h1>cyclig</h1>
                <p>This particular cycling tour in Indian Himalayas, will take you to Himalayan state of Uttaranchal, this trip is a mixture of Adventure & visiting some of the most prominent Himalayan pilgrimage spot of the country. During the trip we will take you through the wildlife tresure of india at Corbett National park, which is true tiger country. We will explore biking along the Ganges to witness the attachment & lifestyle along the most respected river in the world. In this trip we will be having breaks at some of the breathtaking spots with 180 degree view of majestic Himalayas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className='video'>
        <h1>Recommended Video</h1>
        </div>
<div className='fun'>
        <video controls>
          <source src="/videos/uk-tourism-final-english-31-jan-revised-1-low-res_k7xMksbx_xHWR cut_4.mp4" type="video/mp4" height={300} width={400} />
        </video>

      </div>
<div className='form-inline'>

        <label for="email">Email:</label>
        <form>
          <input type="email" id="email" placeholder="Enter email" name="email" />
          <label for="pwd"  id='pwd'>Password:</label>
          <input type="password" id="pwd" placeholder="Enter password" name="pswd" />
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className='footer'>
        <img src={Ministry} alt="image" height={100} width={200} />
        <p><a href='home'>Home</a></p>
        <p><a href='plan'>Plan</a></p>
        <p><a href='explore'>Explore</a></p>
        <p><a href='experience'>Experience</a></p>
        <p><a href='trade'>Trade</a></p>
        <p><a href='tourism policy'>Tourism Policy</a></p>

      </div>
      

    </div>










  );
}

export default App;
