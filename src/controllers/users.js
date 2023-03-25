// import dotenv from 'dotenv';
import Joi from 'joi';
import  user  from '../modules/users.js';
// dotenv.config();

const userSchema =Joi.object({
  name: Joi.string().required().min(3),
  username: Joi.string().required(),
  email: Joi.string(),
  phone: Joi.number().required()
})
export const getAll = async (req, res) => {
    try {
        // const { data: users } = await Axios.get(
        //    `${process.env.API_URI}`
        // );
        const users = await user.find();
        if (users.length === 0) {
            res.send({
                messenger: "khong co thang nao",
            });
        }
        return res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ messenger: err });
    }
};

export const getDetail = async (req, res) => {
    try {
      // const { data: users } = await Axios.get(`${process.env.API_URI}/${req.params.id}`);
      const users = await user.findById(req.params.id);
      if (!users) {
        res.send({
          messenger: "Không tìm thấy thang nao",
        });
      }
      return res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ messenger: err }); 
    }
  };
  
export const create = async (req, res) => {
    try {
        // const { data: users } = await Axios.post(`${process.env.API_URI}`, req.body);
        const users = await user.create(req.body);
        if (!users) {
            res.send({
                messenger: "khong co thang nao duoc them ca",
            });
        }
        return res.json(users )
    } catch (error) {
        res.status(500).json({ messenger: error });
    }
};

export const update = async (req, res) => {
    try {
        // const { data: users } = await Axios.put(`${process.env.API_URI}/${req.params.id}`, req.body);
        const users = await user.findByIdAndUpdate(req.params.id, req.body);
        if (!users) {
            res.send({
                messenger: "them khong thanh cong",
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ messenger: error });
    }
}

export const remove = async (req, res) => {
    try {
        // await Axios.delete(`${process.env.API_URI}/${req.params.id}`);
        const users = await user.deleteOne(req.params.id)
        return res.status(200).json({
          messenger: "  xóa thành công",
        });
      } catch (error) {
        return res.status(500).json({
          messenger: error,
        });
      }
    };