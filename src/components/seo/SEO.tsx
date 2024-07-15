import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import  { RootState }  from '../../redux/rootReducer';


interface SEOTypes {
  title?: string;
  onChange: (e: any) => void;
}

const SEO = ({ title="Search Engine Listing", onChange }: SEOTypes) => {

  const [values, setValues] = useState<any>({meta_title: "", meta_description: "", slug: ""});
  const me = useSelector((state: RootState) => state.auth.me);

  const onChangeValue = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;
    setValues((prevData: any) => ({ ...prevData, [name]: value }));
    onChange(e);
  };

  return (
    <div>
      <div>
        <h1 className="font-nunito font-[900] text-2xl">
          {title}
        </h1>
        <div className="py-3">
          {
            values.meta_title && values.meta_description && values.slug ? 
              <div>
                <div className="text-xl text-blue-800">{values.meta_title}</div>
                <div className="text-sm text-green-600">{me.store_url + '/' + values.slug}</div>
                <div className="text-sm text-gray-500">{values.meta_description}</div>
                
              </div>
            :
            <></>
          }
        </div>
        <form>
          <div className="mt-5">
            <label id="meta_title">Meta Title</label>
            <input
              id="meta_title"
              type="text"
              name="meta_title"
              placeholder="Page Title"
              value={values.meta_title}
              onChange={onChangeValue}
              className="w-full px-5 py-3 placeholder:text-gray-400 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] border-[2px] border-dashed"
            />
          </div>
          <div className="mt-5">
            <label id="meta_description">Meta Description</label>
            <input
              id="meta_description"
              type="text"
              name="meta_description"
              placeholder="Meta Description"
              value={values.meta_description}
              onChange={onChangeValue}
              className="w-full px-5 py-3 placeholder:text-gray-400 bg-secondary-50 mt-3 rounded-xl font-nunito outline-[#0CAF60] border-[2px] border-dashed"
            />
            </div>
            <div className="mt-5">
              <label id="url">URL</label>

              <div contentEditable className="flex mt-3 py-3 px-5 border-dashed border-2 rounded-xl focus-within:border-2 focus-within:border-solid focus-within:border-[#0CAF60]">
                <div contentEditable={false} className="text-gray-400 ">
                  {me.store_url}/
                </div>
                <input
                  id="url"
                  type="text"
                  name="slug"
                  value={values.slug}
                  onChange={onChangeValue}
                  className="w-full ring-0 outline-none border-none focus:ring-0 focus:border-none focus:outline-none"
                /> 
              </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SEO;
