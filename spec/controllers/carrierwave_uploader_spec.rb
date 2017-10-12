# require 'carrierwave/test/matchers'
#
# describe ImageUploader do
#   include CarrierWave::Test::Matchers
#   let(:user) {double('user')}
#   let(:uploader) {ImageUploader.new(user, :image)}
#
#   before do
#     ImageUploader.enable_processing = true
#     File.open("../fixtures/test.png") {|f| uploader.store!(f)}
#   end
#
#   after do
#     ImageUploader.enable_processing = false
#     uploader.remove!
#   end
#
#   it "has the correct format" do
#     expect(uploader).to be_format('png')
#   end
# end
