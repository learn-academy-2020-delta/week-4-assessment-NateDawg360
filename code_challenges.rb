# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

def only_odds_arr (array)
    #map through array
    num_array = array.select do | num |
        num.class == Integer
    #use select to id if number is odd
    end.select do | num |
        num.odd?
    #sort
    end.sort
    #return array
    num_array
end
# puts only_odds_arr(fullArr1)

# def only_odds (array)
#     odds = array.select  do |value|
#         value % 2 == 1
#     end
#     # odds.reverse
# end
# p only_odds(fullArr1)

# puts fullArr1.values_at(* fullArr1.each_index.select {|i| i.odd?})
# p fullArr2.values_at(* fullArr2.each_index.select {|i| i.odd?})


# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.

class Bike
    def initialize (model, frame_size)
        @wheels = 2
        @model = model
        @frame_size = frame_size
        @bell = ''
        @speedometer = 0
    end

    def get_info
        "The #{ @model } bike has #{ @wheels } wheels and a #{ @frame_size} frame."
    end

    def ring_bell
        @bell = 'Ring ring!!'
    end

    def speed
        @speedometer
    end

    def acceleration (mph)
        @speedometer += mph
    end

    def brake (mph)
        if @speedometer - mph < 0
            @speedometer = 0
        else
            @speedometer -= mph
        end
    end
end




# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'
my_bike = Bike.new('Trek', '168cm')
p my_bike.get_info

# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.

p my_bike.ring_bell




# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.

p my_bike.speed




# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

my_bike.acceleration(7)
p my_bike.speed

my_bike.brake(5)
p my_bike.speed




# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
