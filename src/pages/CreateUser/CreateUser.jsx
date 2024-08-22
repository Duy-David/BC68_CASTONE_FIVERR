import React, { useContext, useEffect, useState } from "react";

import InputCustom from "../../Input/InputCustom";
import { skillService } from "../../service/skill.service";
import { nguoiDungService } from "../../service/nguoiDung.service";
import { Select, Space } from "antd";
import { NotificationContext } from "../../App";
import { useSelector } from "react-redux";

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const CreateUser = () => {
  const { handleNotification } = useContext(NotificationContext);
  // cập nhật list skill
  const { user } = useSelector((state) => state.authSlice);
  const [listSKill, setListSKill] = useState([]);
  // state quản lý value của 1 object
  const [userValue, setUserValue] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    birthday: "",
    gender: true,
    role: "",
    skill: [],
    certification: [],
  });
  // các bước tạo user mới
  const [step, setStep] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const [imgUpload, setImgUpload] = useState(null);
  const [errorImage, setErrorImage] = useState("");
  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setUserValue({ ...userValue, [name]: value });
  };
  const handelSubmitAvatar = (e) => {
    e.preventDefault();
    let formData = new formData();
    if (imgUpload) {
      formData.append("formFile", imgUpload.image);
      nguoiDungService
        .uploadAvatar(user.token, formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handelSubmitFormCreateUser = (event) => {
    event.preventDefault();
    console.log(userValue);
    nguoiDungService
      .createUser(userValue)
      .then((res) => {
        console.log(res);
        //đẩy người dùng đế trang update hình ảnh
        // setStep(step + 1);
        setIsActive(false);
        handleNotification("Tạo tài khoản thành công", "success");
      })
      .catch((err) => {
        console.log(err);
        handleNotification(err.response.data.content, "error");
      });
  };
  useEffect(() => {
    skillService
      .getAllSkill()
      .then((res) => {
        console.log(res);
        const newListSkill = res.data.content.map((skill) => {
          return {
            label: skill.tenSkill,
            value: skill.tenSkill,
          };
        });
        setListSKill(newListSkill);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(userValue);
  // hàm rederlayout
  const renderLayoutForm = () => {
    switch (step) {
      case 0:
        return (
          <form className=" grid gap-5" onSubmit={handelSubmitFormCreateUser}>
            <InputCustom
              contentLabel="Name"
              name="name"
              onChange={handleChangeValue}
              classWrapper=""
            />
            <InputCustom
              contentLabel="Email"
              name="email"
              onChange={handleChangeValue}
              classWrapper=""
            />
            <InputCustom
              contentLabel="Phone"
              name="phone"
              onChange={handleChangeValue}
              classWrapper=""
            />
            <InputCustom
              contentLabel="Password"
              type="password"
              name="password"
              onChange={handleChangeValue}
              classWrapper=""
            />
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Birthday
              </label>
              <input
                type="date"
                //name="birthday"
                value={userValue.birthday.split("-").reverse().join("-")}
                onChange={(event) => {
                  console.log(event.target.value);
                  // const arrDate =event.target.value.split("-").reverse().join("-")
                  const [year, mouth, day] = event.target.value.split("-");
                  let valueDate = `${day}-${mouth}-${year}`;
                  console.log(`${day}-${mouth}-${year}`);
                  setUserValue({ ...userValue, birthday: valueDate });
                }}
              />
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Role
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                name="role"
                onChange={handleChangeValue}
              >
                <option value={"admin"}>Admin</option>
                <option value={"user"}>User</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Gender
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                name="gender"
                onChange={handleChangeValue}
              >
                <option value={true}>Male</option>
                <option value={false}>Female</option>
              </select>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Skill
              </label>
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Please select"
                options={listSKill}
                onChange={(value, option) => {
                  console.log(value);
                  setUserValue({ ...userValue, skill: value });
                }}
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Certification
              </label>
              <Select
                mode="tags"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Please select"
                // options={options}
                tokenSeparators={[","]}
                onChange={(value) => {
                  console.log(value);
                  setUserValue({ ...userValue, certification: value });
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-5 py-2 bg-black text-white rounded-md"
                onSubmit={handelSubmitFormCreateUser}
              >
                Tạo người dùng
              </button>
            </div>
          </form>
        );
      case 1:
        return (
          <div>
            {" "}
            <form action="" className="space-y-3" onSubmit={handelSubmitAvatar}>
              <h2> upload hình cho người dùng</h2>
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Upload Image
                </label>
                <input
                  accept="image/png, image/jpeg"
                  type="file"
                  onChange={(event) => {
                    const image = event.target.files[0];

                    if (image) {
                      //kiểm tra dung lương hình ảnh

                      if (image.size > 1024 * 1024 * 2) {
                        setErrorImage("aKích thước vyớt quá dugn lượng");
                        return;
                      }
                      const imageUrl = URL.createObjectURL(image);
                      console.log(imageUrl);
                      setImgUpload({ image, imageUrl });
                    }
                  }}
                />
              </div>
              <p className="text-red-500 ">{errorImage}</p>
              <img src={imgUpload?.imageUrl} alt="" className="w-32" />
              <button
                type="submit"
                className="px-5 py-2 bg-green-500 text-white rounded-md"
              >
                Upload hình ảnh
              </button>
            </form>
          </div>
        );
    }
  };
  return (
    <div>
      <h2 className="font-semibold text-3xl mb-5">
        Form tạo người dùng trong hệ thống
      </h2>
      {renderLayoutForm()}
      <button
        disabled={isActive}
        onClick={() => {
          setStep(step + 1);
        }}
        className={`py-2 px-5 bg-black text-white rounded-lg mt-5 ${
          isActive ? "cursor-not-allowed bg-black/70" : ""
        }`}
      >
        Chuyển đến bước tiếp theo
      </button>
    </div>
  );
};

export default CreateUser;
