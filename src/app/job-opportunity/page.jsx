import CardContenComponent from "@/components/Card/CardContentComponent"
export default function jobOpportunity(){
    return (
      <>
      <section id="titleContentSection">
        <div className="container mx-auto px-2 md:px-4 lg:px-0">
          <h1 className="my-5 text-3xl font-extrabold text-gray-800">USEFUL CONTENTS</h1>
        </div>
      </section>
      <section id="contentCardSection">
        <div className="container mx-auto px-2 md:px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="flex justify-center">
            <CardContenComponent/>
          </div>
          <div className="flex justify-center">
            <CardContenComponent/>
          </div>
          <div className="flex justify-center">
            <CardContenComponent/>
          </div>
          <div className="flex justify-center">
            <CardContenComponent/>
          </div>
        </div>
      </section>
      </>
    )
  }