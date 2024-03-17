import CardCourseComponent from "@/components/Card/CardCourseComponent"
export default function Course(){
    return (
      <>
      <section id="titleCardSection">
        <div className="container mx-auto px-2 md:px-4 lg:px-0">
          <h1 className="my-5 text-3xl font-extrabold text-gray-800">COURSE</h1>
        </div>
      </section>
      <section id="courseCardSection">
        <div className="container mx-auto px-2 md:px-4 lg:px-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="flex justify-center md:justify-center lg:justify-end">
            <CardCourseComponent/>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-start">
            <CardCourseComponent/>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-end">
            <CardCourseComponent/>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-start">
            <CardCourseComponent/>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-end">
            <CardCourseComponent/>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-start">
            <CardCourseComponent/>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-end">
            <CardCourseComponent/>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-start">
            <CardCourseComponent/>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-end">
            <CardCourseComponent/>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-start">
            <CardCourseComponent/>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-end">
            <CardCourseComponent/>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-start">
            <CardCourseComponent/>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-end">
            <CardCourseComponent/>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-start">
            <CardCourseComponent/>
          </div>
        </div>
      </section>
      </>
    )
  }