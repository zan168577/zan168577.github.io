package com.lucasko.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class APIsController {

	@RequestMapping(value = { "/", "/index"}, method = { RequestMethod.GET })
	@ResponseBody
	public ModelAndView index() {
		ModelAndView model = new ModelAndView("index");
		return model;

	}
}
